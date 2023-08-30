package com.sinovdeath.PetsOwnerSimulator.entities.stats;

public class MoodStats {
    private int up;
    private int down;
    private int left;
    private int right;
    private int diagonal;

    public MoodStats(int up, int down, int left, int right, int diagonal) {
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
        this.diagonal = diagonal;
    }

    public int getUp() {
        return up;
    }

    public int getDown() {
        return down;
    }

    public int getLeft() {
        return left;
    }

    public int getRight() {
        return right;
    }

    public int getDiagonal() {
        return diagonal;
    }
}
