package trang.dao.kaggle_grandmaster.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;

import trang.dao.kaggle_grandmaster.model.User;

public interface UserRepository extends CrudRepository<User, Long>  {

    User getUserById(long id);
    List<User> findAllByOrderByCurrentRankingAsc();
    default List<User> getAllUser(){
        return findAllByOrderByCurrentRankingAsc();
    }

    // List<User> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    // @Query("select m from User m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :dateStart and :dateEnd order by date desc")
    // List<User> getUseresByTeamBetweenDates(
    //     @Param("teamName") String teamName, 
    //     @Param("dateStart") LocalDate dateStart, 
    //     @Param("dateEnd") LocalDate dateEnd
    // );
    
    // // List<User> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
    // //     String teamName1, LocalDate date1, LocalDate date2,
    // //     String teamName2, LocalDate date3, LocalDate date4
    // //     );

    
    // default List<User> findLatestUseresbyTeam(String teamName, int count) {
    //     return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    // }

}
