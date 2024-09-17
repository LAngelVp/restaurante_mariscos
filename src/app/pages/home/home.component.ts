import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HistoryComponent } from "../../components/history/history.component";
import { MissionandvisionComponent } from "../../components/missionandvision/missionandvision.component";
import { SpecialDishesComponent } from "../../components/special-dishes/special-dishes.component";
import { BranchesComponent } from "../../components/branches/branches.component";
import { ComentComponent } from "../../components/coment/coment.component";
import { ImageGaleryComponent } from "../../components/image-galery/image-galery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HistoryComponent, 
    MissionandvisionComponent, 
    SpecialDishesComponent, 
    BranchesComponent, 
    ComentComponent, 
    ImageGaleryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  videoMovil: string = '../../../assets/video/video_header_movil.mp4';
  videoDesktop: string = '../../../assets/video/video_header_desktop.mp4';
  @ViewChild('videoP') videoPlay!: ElementRef<HTMLVideoElement>

  ngOnInit(): void {
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('.video');

    videos.forEach(video => {
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
    });
  }
  ngAfterViewInit(): void {
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('.video');

    videos.forEach(video => {
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
    });
  }
}
