type TimeType = `${number}${number}`;
type FileDuration = `${TimeType}:${TimeType}:${TimeType}`

export interface LocalFile {
    name: string;
    duration: FileDuration;
    url: string;
    path: string;
}

export interface TemplateContent {
    files: LocalFile[]
    duration: FileDuration
}