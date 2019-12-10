import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Robot } from "../../interfaces/Robot";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  robotForm;
  imageSource: string = "https://robohash.org/ironman.png?size=400x400";
  constructor(private formBuilder: FormBuilder) {
    this.robotForm = this.formBuilder.group({
      name: "ironman",
      robotWidth: 400,
      robotHeight: 400
    });
  }

  getRobot(info: Robot): void {
    this.imageSource = `https://robohash.org/${
      info.name ? info.name : "ironman"
    }.png?
    size=${info.robotWidth ? info.robotWidth : 400}x${
      info.robotHeight ? info.robotHeight : 400
    }`;
  }
  ngOnInit() {}
}
