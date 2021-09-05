package trang.dao.kaggle_grandmaster.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import trang.dao.kaggle_grandmaster.repository.TeamRepository;
import trang.dao.kaggle_grandmaster.repository.UserRepository;
import trang.dao.kaggle_grandmaster.model.Team;
import trang.dao.kaggle_grandmaster.model.User;

@RestController
@CrossOrigin
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }  
    
    @GetMapping("/user")
    public Iterable<User> getAllUser (){                
        return this.userRepository.getAllUser();
    }

    @GetMapping("/user/{id}")
    public User getUser (@PathVariable long id){                
        return this.userRepository.getUserById(id);
    }


    // private TeamRepository teamRepository;  
    //private UserRepository userRepository;    
    
    // public TeamController(TeamRepository teamRepository, UserRepository userRepository) {
    //     this.teamRepository = teamRepository;
    //     this.userRepository = userRepository;
    // }

    // @GetMapping("/team")
    // public Iterable<Team> getAllTeam (){
                
    //     return this.teamRepository.findAll();
    // }


    // @GetMapping("/team/{teamName}")
    // public Team getTeam (@PathVariable String teamName){
    //     Team team = this.teamRepository.findByTeamName((teamName));
    //     team.setUseres(userRepository.findLatestUseresbyTeam(teamName, 4));
    //     return team;
    // }

    // @GetMapping("/team/{teamName}/useres")
    // public List<User> getUseresForTeam (@PathVariable String teamName, @RequestParam int year){
    //     LocalDate startDate = LocalDate.of(year, 1, 1);
    //     LocalDate endDate = LocalDate.of(year + 1, 1, 1);

    //     return this.userRepository.getUseresByTeamBetweenDates(
    //         teamName, startDate, endDate);

        
    
    // }
    
}
