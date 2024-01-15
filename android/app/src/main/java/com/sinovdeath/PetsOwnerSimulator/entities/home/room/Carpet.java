package com.sinovdeath.PetsOwnerSimulator.entities.home.room;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

public class Carpet {
    private String uri;

    public Carpet() {}

    public String getUri() {
        return uri;
    }
    public void setUri(String uri) {
        this.uri = uri;
    }

    @Override
    public String toString() {
        return "Carpet{" +
                ", uri='" + uri + '\'' +
                '}';
    }
}
