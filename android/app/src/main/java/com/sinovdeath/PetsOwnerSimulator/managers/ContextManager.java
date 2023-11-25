package com.sinovdeath.PetsOwnerSimulator.managers;

import android.annotation.SuppressLint;
import android.content.Context;

public class ContextManager {
    @SuppressLint("StaticFieldLeak")
    private static Context context;

    public static Context getContext() {
        return context;
    }

    public static void setContext(Context newContext) {
        context = newContext;
    }




}
