package com.anushibin007.coderboard.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anushibin007.coderboard.model.CompetitionEntity;
import com.anushibin007.coderboard.repo.CompetitionRepo;

@RestController
@RequestMapping("/api/v1/competitions")
public class CompetitionController {

	@Autowired
	private CompetitionRepo competitionRepository;

	// Create a new competition
	@PostMapping
	public ResponseEntity<CompetitionEntity> createCompetition(@RequestBody CompetitionEntity competition) {
		CompetitionEntity savedCompetition = competitionRepository.save(competition);
		return new ResponseEntity<>(savedCompetition, HttpStatus.CREATED);
	}

	// Retrieve all competitions
	@GetMapping
	public ResponseEntity<List<CompetitionEntity>> getAllCompetitions() {
		List<CompetitionEntity> competitions = competitionRepository.findAll();
		return new ResponseEntity<>(competitions, HttpStatus.OK);
	}

	// Retrieve a competition by ID
	@GetMapping("/{id}")
	public ResponseEntity<CompetitionEntity> getCompetitionById(@PathVariable String id) {
		Optional<CompetitionEntity> competition = competitionRepository.findById(id);
		return competition.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
				.orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	// Update a competition by ID
	@PutMapping("/{id}")
	public ResponseEntity<CompetitionEntity> updateCompetition(@PathVariable String id,
			@RequestBody CompetitionEntity competitionDetails) {
		Optional<CompetitionEntity> existingCompetition = competitionRepository.findById(id);

		if (existingCompetition.isPresent()) {
			CompetitionEntity competition = existingCompetition.get();
			competition.setName(competitionDetails.getName());
			competition.setDescription(competitionDetails.getDescription());
			competition.setParticipants(competitionDetails.getParticipants());
			competition.setOwner(competitionDetails.getOwner());
			competition.setStartTime(competitionDetails.getStartTime());
			competition.setEndTime(competitionDetails.getEndTime());

			CompetitionEntity updatedCompetition = competitionRepository.save(competition);
			return new ResponseEntity<>(updatedCompetition, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Delete a competition by ID
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteCompetition(@PathVariable String id) {
		if (competitionRepository.existsById(id)) {
			competitionRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
