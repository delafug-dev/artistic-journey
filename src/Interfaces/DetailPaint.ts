// Generated by https://quicktype.io

import { Image } from "./ArtObject";

export interface DetailPaint {
    elapsedMilliseconds: number;
    artObject:           ArtObjectDetailPaint;
    artObjectPage:       ArtObjectPage;
}

export interface ArtObjectDetailPaint {
    links?:                     Links;
    id?:                        string;
    priref?:                    string;
    objectNumber?:              string;
    language?:                  string;
    title?:                     string;
    copyrightHolder?:           null;
    webImage:                   Image;
    colors?:                    any[];
    colorsWithNormalization?:   any[];
    normalizedColors?:          any[];
    normalized32Colors?:        any[];
    materialsThesaurus?:        any[];
    techniquesThesaurus?:       any[];
    productionPlacesThesaurus?: any[];
    titles?:                    any[];
    description?:               string;
    labelText?:                 null;
    objectTypes?:               any[];
    objectCollection?:          any[];
    makers?:                    any[];
    principalMakers?:           any[];
    plaqueDescriptionDutch?:    string;
    plaqueDescriptionEnglish?:  string;
    principalMaker?:            string;
    artistRole?:                null;
    associations?:              any[];
    acquisition?:               ArtObjectPage;
    exhibitions?:               any[];
    materials?:                 any[];
    techniques?:                any[];
    productionPlaces?:          any[];
    dating?:                    DatingPaint;
    classification?:            ArtObjectPage;
    hasImage?:                  boolean;
    historicalPersons?:         any[];
    inscriptions?:              any[];
    documentation?:             any[];
    catRefRPK?:                 any[];
    principalOrFirstMaker?:     string;
    dimensions?:                any[];
    physicalProperties?:        any[];
    physicalMedium?:            string;
    longTitle?:                 string;
    subTitle?:                  string;
    scLabelLine?:               string;
    label?:                     Label;
    showImage?:                 boolean;
    location?:                  string;
}

export interface ArtObjectPage {
}

export interface Label {
    title:       string;
    makerLine:   string;
    description: string;
    notes:       string;
    date:        string;
}

export interface Links {
    search: string;
}

export interface DatingPaint {
    presentingDate: string;
    sortingDate: number;
    period: number;
    yearEarly: number;
    yearLate: number;
}
