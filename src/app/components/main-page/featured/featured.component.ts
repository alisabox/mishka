import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/shared/services/translate.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  constructor(translateService: TranslateService) { }

  ngOnInit(): void {
  }

}
