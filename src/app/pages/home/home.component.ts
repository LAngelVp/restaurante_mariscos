import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HistoryComponent } from "../../components/history/history.component";
import { MissionandvisionComponent } from "../../components/missionandvision/missionandvision.component";
import { SpecialDishesComponent } from "../../components/special-dishes/special-dishes.component";
import { BranchesComponent } from "../../components/branches/branches.component";
import { ComentComponent } from "../../components/coment/coment.component";
import { ImageGaleryComponent } from "../../components/image-galery/image-galery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HistoryComponent, MissionandvisionComponent, SpecialDishesComponent, BranchesComponent, ComentComponent, ImageGaleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('video') videoPlay!: ElementRef<HTMLVideoElement>

  ngAfterViewInit(): void {
    const video : HTMLVideoElement = this.videoPlay.nativeElement;

    video.autoplay = true;
    video.loop = true;
    video.muted = true;
  }
}
