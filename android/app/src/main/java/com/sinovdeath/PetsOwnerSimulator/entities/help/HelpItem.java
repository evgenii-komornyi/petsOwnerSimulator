package com.sinovdeath.PetsOwnerSimulator.entities.help;

import java.util.List;

public class HelpItem {
    private String id;
    private String title;
    private String description;
    private String introductionVersion;
    private List<String> tags;
    private String image;

    public HelpItem(String id, String title, String description, String introductionVersion, List<String> tags, String image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.introductionVersion = introductionVersion;
        this.tags = tags;
        this.image = image;
    }
}
