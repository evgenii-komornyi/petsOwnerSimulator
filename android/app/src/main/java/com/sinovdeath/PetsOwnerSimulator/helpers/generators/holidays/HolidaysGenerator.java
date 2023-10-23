package com.sinovdeath.PetsOwnerSimulator.helpers.generators.holidays;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.holidays.Holiday;
import com.sinovdeath.PetsOwnerSimulator.entities.holidays.HolidayImage;
import com.sinovdeath.PetsOwnerSimulator.enums.HolidayName;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class HolidaysGenerator {
    @RequiresApi(api = Build.VERSION_CODES.N)
    public static List<Holiday> generateHolidays() {
        List<Holiday> holidays = new ArrayList<>();
        Holiday halloween = _generateHoliday(HolidayName.HALLOWEEN.getHoliday(), Constants.HALLOWEEN_DATES);

        holidays.add(halloween);

        return holidays;
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    private static Holiday _generateHoliday(String holidayName, String dates) {
        Holiday holiday = new Holiday();
        holiday.setHoliday(holidayName);
        holiday.setPriority(Constants.OTHER_HOLIDAYS_PRIORITY);

        List<HolidayImage> images = _generateImagesByHoliday(holidayName);

        holiday.setDates(_convertDatesToList(dates));
        holiday.setImages(images);

        return holiday;
    }

    private static List<HolidayImage> _generateImagesByHoliday(String holidayName) {
        List<HolidayImage> images = new ArrayList<>();

        if (holidayName.equals(HolidayName.HALLOWEEN.getHoliday())) {
            images = Arrays.asList(
                    _createImage(holidayName, "carpets", "ghost_carpet"),
                    _createImage(holidayName, "decorations", "pumpkin", "candle-inside"),
                    _createImage(holidayName, "frames", "frame_halloween1"),
                    _createImage(holidayName, "frames", "frame_halloween2")
            );
        }

        return images;
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    private static List<Date> _convertDatesToList(String dates) {
        return Arrays.asList(dates.split(", ")).stream().map(date -> _convertDateFromString(date)).collect(Collectors.toList());
    }

    private static HolidayImage _createImage(String holidayName, String imageCategory, String imageName) {
        return _createImage(holidayName, imageCategory, imageName, null);
    }

    private static HolidayImage _createImage(String holidayName, String imageCategory, String imageName, String animationName) {
        HolidayImage image = new HolidayImage();
        image.setCategory(imageCategory);
        image.setUri(Generator.generatePathToFile(Constants.HOLIDAY_PATH_FORMAT, Constants.ASSETS_HOLIDAYS_FOLDER, holidayName, imageCategory, imageName, Constants.IMAGE_EXT));

        if (animationName != null) {
            image.setAnimation(Generator.generatePathToFile(Constants.HOLIDAY_PATH_FORMAT, Constants.ASSETS_HOLIDAYS_FOLDER, holidayName, imageCategory, animationName, Constants.ANIMATION_EXT));
        }

        return image;
    }
    private static Date _convertDateFromString(String holidayDate) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd.MM");

        try {
            return dateFormat.parse(holidayDate);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }
}
