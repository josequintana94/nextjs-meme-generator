interface Background {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface TextArea {
  id: string;
  top: number;
  left: number;
  width: number;
  height: number;
  text: string;
  fontSize: number;
  color: string;
}

export interface MemeTemplate {
  id: string;
  background: Background;
  textareas: TextArea[];
}