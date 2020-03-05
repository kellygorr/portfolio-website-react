export enum TagType {
	Xbox = 'Xbox',
	Microsoft = 'Microsoft',
	Poll = 'poll',
	Quiz = 'quiz',
	Plugin = 'plugin',
	Tooling = 'tooling',
	Infographic = 'infographic',
	Website = 'website',
	Mobile = 'mobile',
	Web = 'web',
	Kinect = 'Xbox Kinect',
	Print = 'print',
}
export enum SkillType {
	UIUX = 'UI-UX',
	Prototyping = 'prototyping',
	Design = 'design',
	Illustration = 'illustration',
	JQuery = 'jQuery',
	JavaScript = 'JavaScript',
	React = 'React',
	TypeScript = 'TypeScript',
	AngularJS = 'AngularJS',
	PHP = 'PHP',
	MySQL = 'MySQL',
	Ajax = 'Ajax',
	JSON = 'JSON',
	HTML = 'HTML',
	CSS = 'CSS',
	Fabric = 'UI Fabric',
}

export enum ToolType {
	Illustrator = 'Illustrator',
	Photoshop = 'Photoshop',
	InDesign = 'InDesign',
}

export const relatedTags: (TagType | SkillType | ToolType)[][] = [
	[SkillType.HTML, SkillType.CSS],
	[SkillType.Illustration, TagType.Infographic, ToolType.Illustrator],
	[TagType.Poll, TagType.Quiz],
	[SkillType.Design, SkillType.UIUX],
	[TagType.Website, TagType.Mobile],
	[SkillType.JavaScript, SkillType.TypeScript, SkillType.React],
	[SkillType.JavaScript, SkillType.JQuery, SkillType.Ajax],
	[TagType.Website, SkillType.HTML, SkillType.CSS],
	[ToolType.Photoshop, ToolType.Illustrator],
	[SkillType.PHP, SkillType.MySQL],
	[TagType.Xbox, TagType.Microsoft],
	[TagType.Xbox, TagType.Kinect],
	[TagType.Tooling, TagType.Plugin],
]

export enum SectionType {
	Header = 'header',
	Slideshow = 'slideshow',
	Body = 'body',
	Highlight = 'highlight',
	Attachments = 'attachments',
}

export enum FileType {
	Video,
	Image,
	Pdf,
	Link,
}

export interface IProject {
	details: IThumbnail
	content?: ISection[]
}

export interface ISection {
	header?: string
	slideshow?: ISlideshow
	body?: string
	highlight?: IHighlight[]
	attachments?: IThumbnail[]
}

export interface ISlideshow {
	activeColor?: string
	slides: ISlide[]
	width: number
}
export interface ISlide {
	img: string
	caption?: string
	file?: IFile
	width?: number
}

export interface IHighlight {
	header: string
	tags?: (TagType | SkillType | ToolType)[]
	list?: string[]
	body?: string
}

export interface IFile {
	type: FileType
	source: string
}

export interface IThumbnail {
	header: string
	thumbnail: string
	file?: IFile
	tags?: TagType[]
}
