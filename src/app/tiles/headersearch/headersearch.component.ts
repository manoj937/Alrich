import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headersearch',
  templateUrl: './headersearch.component.html',
  styleUrls: ['./headersearch.component.scss']
})
export class HeadersearchComponent implements OnInit {

  cards = [{
    image: "learning.png",
    course: "SCRUM & AGILE",
    description: "#Be Agile. Learn and get certified with Scrum & Agile project management certifications",
    class: "learning",
    header: "text-primary"
  },{
    image: "pm.png",
    course: "PROJECT MANAGEMENT",
    description: "Traditional project management is still alive. Get yourself ready with PRINCE2 Foundation and Practitioner certification.",
    class: "pm",
    header: "text-success"
  },{
    image: "it.jpg",
    course: "IT SERVICE MANAGEMENT",
    description: "Boost your career in IT Service Management with ITIL and other IT Service Management Certifications.",
    class: "it",
    header: "text-danger"
  },{
    image: "quality.jpg",
    course: "QUALITY MANAGEMENT",
    description: "#Quality Matters! Learn. Get certified with Six Sigma and Lean Six Sigma. Be a quality champion.",
    class: "quality",
    header: "text-dark"
  }]
  constructor() { }

  ngOnInit() {
  }

}
