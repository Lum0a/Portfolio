import React from 'react';
import { RESUME_SKILL_GROUPS } from '../data';

export const SkillsSection: React.FC = () => {
	return (
		<section
			id="skills-section"
			className="relative py-14 px-5 sm:px-8 md:py-20 md:px-12 max-w-7xl mx-auto"
		>
			<div className="space-y-10">
				<div className="space-y-4 max-w-3xl">
					<div className="flex items-center gap-2">
						<span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
						<span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FF5C00]">
							FÄHIGKEITEN
						</span>
					</div>
					<h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] font-display">
						Gestaltung bis Umsetzung.
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/10 pt-7">
					{RESUME_SKILL_GROUPS.map((group) => (
						<div key={group.category} className="space-y-4">
							<h3 className="text-sm font-semibold text-[#111111]">{group.category}</h3>
							<ul className="space-y-2 text-sm text-[#555555]">
								{group.skills.map((skill) => <li key={skill}>{skill}</li>)}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
