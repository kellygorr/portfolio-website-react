export enum TagType{
    XboxOne = 'Xbox One',
    Poll= 'poll',
    Quiz= 'quiz',
    InteractiveVideo= 'interactive video',
    Plugin='plugin',
    UIUX='UI/UX',
    Tool='tool',
    Design='design',
    InterfaceDesign='interface design',
    Illustration='illustration',
    Infographic='infographic',
    Website='website',
    WebDesign='web design',
    MobileDesign='mobile design',
    EmailDesign='email design'
}

export interface IProject {
    title: string
    subtitle: string
    thumbnail: string
    content: any
    tags?: TagType[]
}
