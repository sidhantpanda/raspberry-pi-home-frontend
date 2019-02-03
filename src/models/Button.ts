import { SemanticCOLORS } from "semantic-ui-react";

export default class Button {
  public color: SemanticCOLORS;
  public id: string;
  public status: boolean;
  public label: boolean;
  public type: string;

  constructor(rawJson: any) {
    const { color, id, status, type, label } = rawJson;
    this.color = color;
    this.id = id;
    this.status = status;
    this.label = label;
    this.type = type;
  }
}