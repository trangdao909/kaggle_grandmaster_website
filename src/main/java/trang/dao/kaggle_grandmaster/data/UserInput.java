package trang.dao.kaggle_grandmaster.data;
//displayName,currentRanking,userId,userUrl,tier,points,userJoinDate,totalGoldMedals,totalSilverMedals,totalBronzeMedals

public class UserInput {
    private String userId;
    private String displayName;
    private String currentRanking;
    private String userUrl;
    private String tier;
    private String points;
    private String userJoinDate;
    private String totalGoldMedals;
    private String totalSilverMedals;
    private String totalBronzeMedals;

    
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getDisplayName() {
        return displayName;
    }
    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }
    public String getCurrentRanking() {
        return currentRanking;
    }
    public void setCurrentRanking(String currentRanking) {
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
    public String getPoints() {
        return points;
    }
    public void setPoints(String points) {
        this.points = points;
    }
    public String getUserJoinDate() {
        return userJoinDate;
    }
    public void setUserJoinDate(String userJoinDate) {
        this.userJoinDate = userJoinDate;
    }
    public String getTotalGoldMedals() {
        return totalGoldMedals;
    }
    public void setTotalGoldMedals(String totalGoldMedals) {
        this.totalGoldMedals = totalGoldMedals;
    }
    public String getTotalSilverMedals() {
        return totalSilverMedals;
    }
    public void setTotalSilverMedals(String totalSilverMedals) {
        this.totalSilverMedals = totalSilverMedals;
    }
    public String getTotalBronzeMedals() {
        return totalBronzeMedals;
    }
    public void setTotalBronzeMedals(String totalBronzeMedals) {
        this.totalBronzeMedals = totalBronzeMedals;
    }
    
  

    

}