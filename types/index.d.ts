export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImageUrl: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type VideoObject = {
  width: string;
  height: string;
  caption: string;
  description: string;
  uploadDate: string;
  url: string;
  thumbnail: string;
};

export type IconSize = {
  size?: number;
};

export type InstagramPostJson = {
  articleBody: string;
  author: Author;
  comment: Comment;
  commentCount: string;
  contentLocation: any;
  "@context": string;
  dateCreated: string;
  dateModified: string;
  headline: string;
  identifier: Identifier3;
  image: any[];
  interactionStatistic: InteractionStatistic[];
  mainEntityOfPage: MainEntityOfPage;
  "@type": string;
  video: InstagramVideo[];
};

export type Author = {
  "@type": string;
  identifier: Identifier;
  image: string;
  name: string;
  alternateName: string;
  url: string;
};

export type Comment = {
  "@type": string;
  text: string;
  author: CommentAuthor;
  dateCreated: string;
  interactionStatistic: InteractionStatistic;
};

export type CommentAuthor = {
  "@type": string;
  identifier: Identifier;
  image: string;
  name: string;
  alternateName: string;
  url: string;
};

export type InteractionStatistic = {
  "@type": string;
  interactionType: string;
  userInteractionCount: number;
};

export type Identifier = {
  "@type": string;
  propertyID: string;
  value: string;
};

export type MainEntityOfPage = {
  "@type": string;
  "@id": string;
};

export type InstagramVideo = {
  "@type": string;
  uploadDate: string;
  description: string;
  name: string;
  caption: string;
  height: string;
  width: string;
  contentUrl: string;
  thumbnailUrl: string;
  genre: string[];
  keywords: string[];
};
