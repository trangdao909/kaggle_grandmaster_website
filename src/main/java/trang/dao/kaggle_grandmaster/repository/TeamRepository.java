package trang.dao.kaggle_grandmaster.repository;

import org.springframework.data.repository.CrudRepository;

import trang.dao.kaggle_grandmaster.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);
    
}

