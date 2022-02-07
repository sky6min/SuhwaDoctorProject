package com.ssafy.db.repository;

import com.ssafy.db.entity.doctor.DoctorResume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorResumeRepository extends JpaRepository<DoctorResume, Long> {
}
