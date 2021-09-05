package trang.dao.kaggle_grandmaster.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String teamName;
    private long totalUseres;
    private long totalWins;    

    
    @Transient
    private List<User> useres;


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getTeamName() {
        return teamName;
    }
    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
    public long getTotalUseres() {
        return totalUseres;
    }
    public void setTotalUseres(long totalUseres) {
        this.totalUseres = totalUseres;
    }
    public long getTotalWins() {
        return totalWins;
    }
    public void setTotalWins(long totalWins) {
        this.totalWins = totalWins;
    }
    public Team(String teamName, long totalUseres) {
        this.teamName = teamName;
        this.totalUseres = totalUseres;
    }
    @Override
    public String toString() {
        return "Team [teamName=" + teamName + ", totalUseres=" + totalUseres + ", totalWins=" + totalWins + "]";
    }
    public Team() {
        
    }
    public List<User> getUseres() {
        return useres;
    }
    public void setUseres(List<User> useres) {
        this.useres = useres;
    }

}