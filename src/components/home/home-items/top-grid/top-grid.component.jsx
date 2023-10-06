import React from 'react';
import { View, ImageBackground } from 'react-native';

import { Sofa } from './sofa/sofa.component';
import { Table } from './table/table.component';

import useOwnerStore from '../../../../app/useOwnerStore';
import { styles } from './top-grid.styles.jsx';
import { Constants } from '../../../../constants/constants';

export const TopGrid = () => {
    const {
        home: {
            livingRoom: { smell },
        },
    } = useOwnerStore(state => state);

    return (
        <View style={styles.topGridContainer}>
            {smell > 0 && (
                <ImageBackground
                    source={{
                        uri: 'asset:/images/home-items/smell.png',
                    }}
                    style={[
                        styles.smellContainer,

                        { opacity: 0.4 + smell / Constants.MAX_HOME_SMELL },
                    ]}
                    imageStyle={styles.smellImage}
                    resizeMode="contain"
                />
            )}
            <View style={styles.sofaContainer}>
                <Sofa />
            </View>
            <View style={styles.tableContainer}>
                <Table />
            </View>
        </View>
    );
};
