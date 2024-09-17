import { Component } from '@angular/core';
import { HistoryComponent } from "../../components/history/history.component";
import { MissionandvisionComponent } from "../../components/missionandvision/missionandvision.component";
import { SpecialDishesComponent } from "../../components/special-dishes/special-dishes.component";
import { BranchesComponent } from "../../components/branches/branches.component";
import { ComentComponent } from "../../components/coment/coment.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HistoryComponent, MissionandvisionComponent, SpecialDishesComponent, BranchesComponent, ComentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
