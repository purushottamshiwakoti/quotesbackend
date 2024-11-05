import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentImage extends Schema.Component {
  collectionName: 'components_component_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media<'images', true>;
    alt: Attribute.String;
  };
}

export interface ComponentLink extends Schema.Component {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentQuotes extends Schema.Component {
  collectionName: 'components_component_quotes';
  info: {
    displayName: 'Quotes';
  };
  attributes: {
    quotes: Attribute.Component<'component.text', true>;
  };
}

export interface ComponentReadmore extends Schema.Component {
  collectionName: 'components_component_readmores';
  info: {
    displayName: 'Readmore';
  };
  attributes: {
    readmore: Attribute.Component<'component.link'>;
  };
}

export interface ComponentSection extends Schema.Component {
  collectionName: 'components_component_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    title: Attribute.RichText;
  };
}

export interface ComponentSeo extends Schema.Component {
  collectionName: 'components_component_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    ogImage: Attribute.Media<'images'>;
  };
}

export interface ComponentText extends Schema.Component {
  collectionName: 'components_component_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ComponentTitle extends Schema.Component {
  collectionName: 'components_component_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Attribute.Component<'component.text'>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    description: Attribute.Text;
    email: Attribute.Email;
    phone: Attribute.String;
    links: Attribute.Component<'component.link', true>;
    newsletter: Attribute.Text;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    navbar: Attribute.Component<'component.link', true>;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    buttonName: Attribute.String;
    image: Attribute.Media<'images'>;
    alt: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'cup';
  };
  attributes: {
    MetaTitle: Attribute.String & Attribute.Required;
    MetaDescription: Attribute.Text & Attribute.Required;
    OgImage: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.image': ComponentImage;
      'component.link': ComponentLink;
      'component.quotes': ComponentQuotes;
      'component.readmore': ComponentReadmore;
      'component.section': ComponentSection;
      'component.seo': ComponentSeo;
      'component.text': ComponentText;
      'component.title': ComponentTitle;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero': LayoutHero;
      'shared.seo': SharedSeo;
    }
  }
}
