package com.sinovdeath.PetsOwnerSimulator.entities.home;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;

public class Image {
    private String uri;

    public Image() {
        this.uri = String.format("%s/%s%s", Constants.ASSETS_ROOMS, Constants.DEFAULT_ROOM, Constants.IMAGE_EXT);
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }
}
