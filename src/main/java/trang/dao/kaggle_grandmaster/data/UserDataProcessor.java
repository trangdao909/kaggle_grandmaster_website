package trang.dao.kaggle_grandmaster.data;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.batch.item.ItemProcessor;

import trang.dao.kaggle_grandmaster.model.User;

public class UserDataProcessor implements ItemProcessor<UserInput, User> {

    private static final Logger log = LoggerFactory.getLogger(UserDataProcessor.class);

    @Override
    public User process(final UserInput userInput) throws Exception {

        //displayName,currentRanking,userId,userUrl,tier,points,userJoinDate,totalGoldMedals,totalSilverMedals,totalBronzeMedals
        
        User user = new User();
        user.setId(Long.parseLong(userInput.getUserId()));
        user.setDisplayName(userInput.getDisplayName());
        user.setCurrentRanking(Long.parseLong(userInput.getCurrentRanking()));
        user.setUserUrl(userInput.getUserUrl());
        user.setTier(userInput.getTier());
        user.setPoints(Double.parseDouble(userInput.getPoints()));

        user.setUserJoinDate(LocalDate.parse(userInput.getUserJoinDate().substring(0, 10)));
        user.setTotalGoldMedals(Long.parseLong(userInput.getTotalGoldMedals()));
        user.setTotalSilverMedals(Long.parseLong(userInput.getTotalSilverMedals()));
        user.setTotalBronzeMedals(Long.parseLong(userInput.getTotalBronzeMedals()));


        return user;
    }

}

