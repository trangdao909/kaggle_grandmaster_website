package trang.dao.kaggle_grandmaster.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
//displayName,currentRanking,userId,userUrl,tier,points,userJoinDate,totalGoldMedals,totalSilverMedals,totalBronzeMedals

    @Id
    private long id;
    private String  displayName;
    private long    currentRanking;
    private String  userUrl;
    private String  tier;
    private double  points;
    private LocalDate userJoinDate;
    private long    totalGoldMedals;
    private long    totalSilverMedals;
    private long    totalBronzeMedals;

    public User() {
    }
    public User(String displayName, long currentRanking) {
        this.displayName = displayName;
        this.currentRanking = currentRanking;
    }
    
    public User(long id, String displayName, long currentRanking, String userUrl, String tier, long points,
            LocalDate userJoinDate, long totalGoldMedals, long totalSilverMedals, long totalBronzeMedals) {
        this.id = id;
        this.displayName = displayName;
        this.currentRanking = currentRanking;
        this.userUrl = userUrl;
        this.tier = tier;
        this.points = points;
        this.userJoinDate = userJoinDate;
        this.totalGoldMedals = totalGoldMedals;
        this.totalSilverMedals = totalSilverMedals;
        this.totalBronzeMedals = totalBronzeMedals;
    }
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getDisplayName() {
        return displayName;
    }
    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }
    public long getCurrentRanking() {
        return currentRanking;
    }
    public void setCurrentRanking(long currentRanking) {
        this.currentRanking = currentRanking;
    }
    public String getUserUrl() {
        return userUrl;
    }
    public void setUserUrl(String userUrl) {
        this.userUrl = userUrl;
    }
    public String getTier() {
        return tier;
    }
    public void setTier(String tier) {
        this.tier = tier;
    }
    public double getPoints() {
        return points;
    }
    public void setPoints(double points) {
        this.points = points;
    }
    public LocalDate getUserJoinDate() {
        return userJoinDate;
    }
    public void setUserJoinDate(LocalDate userJoinDate) {
        this.userJoinDate = userJoinDate;
    }
    public long getTotalGoldMedals() {
        return totalGoldMedals;
    }
    public void setTotalGoldMedals(long totalGoldMedals) {
        this.totalGoldMedals = totalGoldMedals;
    }
    public long getTotalSilverMedals() {
        return totalSilverMedals;
    }
    public void setTotalSilverMedals(long totalSilverMedals) {
        this.totalSilverMedals = totalSilverMedals;
    }
    public long getTotalBronzeMedals() {
        return totalBronzeMedals;
    }
    public void setTotalBronzeMedals(long totalBronzeMedals) {
        this.totalBronzeMedals = totalBronzeMedals;
    }

   
    
    
}
