package com.sinovdeath.PetsOwnerSimulator.entities.holidays;

public class HolidayImage {
    private String uri;
    private String category;
    private String animation;

    public String getAnimation() { return animation; }
    public void setAnimation(String animation) { this.animation = animation; }
    public String getCategory() { return category; }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getUri() {
        return uri;
    }
    public void setUri(String uri) {
        this.uri = uri;
    }

    @Override
    public String toString() {
        return "HolidayImage{" +
                "uri='" + uri + '\'' +
                ", category='" + category + '\'' +
                ", animation='" + animation + '\'' +
                '}';
    }
}
