package trang.dao.kaggle_grandmaster.data;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import trang.dao.kaggle_grandmaster.model.User;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

    private final EntityManager em;

    @Autowired
    public JobCompletionNotificationListener(EntityManager em) {
        this.em = em;
    }

  @Override
  @Transactional
  public void afterJob(JobExecution jobExecution) {
    if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("!!! JOB FINISHED! Time to verify the results");
      
      Map<String, User> userData = new HashMap<>();
            
      em.createQuery("select m.displayName, m.currentRanking from User m ", Object[].class)
        .getResultList()
        .stream()
        .map(e -> new User((String) e[0], (long) e[1]))
        .forEach(user -> userData.put(user.getDisplayName(), user)); 

        
        // userData.values().forEach(user -> {
        //   System.out.println(user.getDisplayName());         
        // });
    }
  }
}
