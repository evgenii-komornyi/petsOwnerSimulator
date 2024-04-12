package com.sinovdeath.PetsOwnerSimulator.services.help;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.sinovdeath.PetsOwnerSimulator.entities.help.HelpItem;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.help.HelpGenerator;

import java.util.ArrayList;
import java.util.List;

public class HelpService implements IHelpService {
    private List<HelpItem> helpItems;

    @RequiresApi(api = Build.VERSION_CODES.N)
    public HelpService() {
        this.helpItems = HelpGenerator.generateHelp();
    }

    @Override
    public List<HelpItem> getHelp() {
        return helpItems;
    }
}
