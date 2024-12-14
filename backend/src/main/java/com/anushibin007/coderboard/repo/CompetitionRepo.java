package com.anushibin007.coderboard.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anushibin007.coderboard.model.CompetitionEntity;

public interface CompetitionRepo extends JpaRepository<CompetitionEntity, String> {

}
