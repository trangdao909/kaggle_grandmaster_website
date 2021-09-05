package trang.dao.kaggle_grandmaster.data;

import javax.sql.DataSource;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import trang.dao.kaggle_grandmaster.model.User;

@Configuration
@EnableBatchProcessing
public class BatchConfig {

    private final String[] FIELD_NAMES = new String[] { "displayName","currentRanking","userId","userUrl",
    "tier","points","userJoinDate","totalGoldMedals","totalSilverMedals","totalBronzeMedals" };

    @Autowired
    public JobBuilderFactory jobBuilderFactory;

    @Autowired
    public StepBuilderFactory stepBuilderFactory;

    @Bean
    public FlatFileItemReader<UserInput> reader() {
        return new FlatFileItemReaderBuilder<UserInput>().name("UserItemReader")
                .resource(new ClassPathResource("topKagglersCompetitions.csv")).delimited().names(FIELD_NAMES)
                .fieldSetMapper(new BeanWrapperFieldSetMapper<UserInput>() {
                    {
                        setTargetType(UserInput.class);
                    }
                }).build();
    }

    @Bean
    public UserDataProcessor processor() {
        return new UserDataProcessor();
    }

    @Bean
    public JdbcBatchItemWriter<User> writer(DataSource dataSource) {
        return new JdbcBatchItemWriterBuilder<User>()
                .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
                .sql("INSERT INTO user (id,display_name,current_ranking,user_url,tier,points,user_join_date,total_gold_medals,total_silver_medals,total_bronze_medals) "
                        + " VALUES (:id,:displayName,:currentRanking,:userUrl,:tier,:points,:userJoinDate,:totalGoldMedals,:totalSilverMedals,:totalBronzeMedals)")
                .dataSource(dataSource).build();
    }

    @Bean
    public Job importUserJob(JobCompletionNotificationListener listener, Step step1) {
        return jobBuilderFactory
            .get("importUserJob")
            .incrementer(new RunIdIncrementer())
            .listener(listener)
            .flow(step1)
            .end()
            .build();
    }

    @Bean
    public Step step1(JdbcBatchItemWriter<User> writer) {
        return stepBuilderFactory
            .get("step1")
            .<UserInput, User>chunk(10)
            .reader(reader())
            .processor(processor())
            .writer(writer)
            .build();
    }
}