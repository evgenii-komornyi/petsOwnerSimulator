package com.sinovdeath.PetsOwnerSimulator.entities.home;

import java.io.Serializable;

public class Image implements Serializable {
    private String uri;

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    @Override
    public String toString() {
        return "Image{" +
                "uri='" + uri + '\'' +
                '}';
    }
}
