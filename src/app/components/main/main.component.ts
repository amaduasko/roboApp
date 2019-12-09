import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  name = new FormControl();
  imageSource: string = "https://robohash.org/ironman.png?size=400x400";
  constructor() {}
  getRobot(name: string): void {
    this.imageSource = `https://robohash.org/${name}.png?size=400x400`;
  }
  ngOnInit() {}
}
