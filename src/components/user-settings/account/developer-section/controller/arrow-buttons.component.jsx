import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../../../icon/icon.component';

import { Constants } from '../../../../../constants/constants';

import { styles } from './joystick.styles';

export const ArrowButtons = ({
    keys: {
        arrows: { topKeys, bottomKeys },
    },
    onPressKeyHandler,
}) => {
    return (
        <View style={styles.arrowsContainer}>
            <View style={styles.rowContainer}>
                {topKeys.map((key, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={onPressKeyHandler}
                        disabled={key === ''}
                    >
                        {key !== '' && (
                            <Icon
                                type={Constants.MATERIALCOMMUNITYICONS_ICON}
                                icon={`arrow-${key}`}
                                color="white"
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.rowContainer}>
                {bottomKeys.map((key, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={onPressKeyHandler}
                    >
                        <Icon
                            type={Constants.MATERIALCOMMUNITYICONS_ICON}
                            icon={`arrow-${key}`}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};
