import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    View,
    Animated,
    Text,
} from 'react-native';
import * as shape from 'd3-shape';
import Svg, { Path } from 'react-native-svg';
import Tabs from './tabs.component';
import { styles } from '../navigation.styles';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { width } = Dimensions.get('window');
const height = 65;

const getPath = (tabWidth, width, totalTab) => {
    const tab = shape
        .line()
        .x(d => d.x)
        .y(d => d.y)
        .curve(shape.curveBasis)([
        { x: width + tabWidth / 2 - 100, y: 0 },
        { x: width + tabWidth / 2 - 65 + -35, y: 0 },
        { x: width + tabWidth / 2 - 50 + 10, y: -6 },
        { x: width + tabWidth / 2 - 50 + 15, y: height - 14 },
        { x: width + tabWidth / 2 + 50 - 15, y: height - 14 },
        { x: width + tabWidth / 2 + 50 - 10, y: -6 },
        { x: width + tabWidth / 2 + 65 - -35, y: 0 },
        { x: width + tabWidth / 2 + 100, y: 0 },
    ]);

    return ` ${tab} `;
};

const TabNavigation = props => {
    const {
        tabs,
        containerTopRightRadius,
        tabBarBackground,
        tabBarContainerBackground,
        containerBottomSpace,
        containerWidth,
        containerTopLeftRadius,
        containerBottomLeftRadius,
        containerBottomRightRadius,
    } = props;

    let CustomWidth = containerWidth ? containerWidth : width;

    const value = useRef(new Animated.Value(0)).current;

    const translateX = value.interpolate({
        inputRange: [0, CustomWidth],
        outputRange: [-CustomWidth, 0],
    });

    const tabBarBackgroundColor = tabBarBackground
        ? tabBarBackground
        : 'transparent';

    const tabWidth = tabs.length > 0 ? CustomWidth / tabs.length : null;

    let d;
    if (typeof tabWidth === 'number') {
        d = getPath(tabWidth, CustomWidth, tabs.length);
    }

    const borderTopRightRadius = containerTopRightRadius
        ? containerTopRightRadius
        : 0;

    const borderTopLeftRadius = containerTopLeftRadius
        ? containerTopLeftRadius
        : 0;

    const borderBottomLeftRadius = containerBottomLeftRadius
        ? containerBottomLeftRadius
        : 0;

    const borderBottomRightRadius = containerBottomRightRadius
        ? containerBottomRightRadius
        : 0;

    useEffect(() => {
        if (tabs.length === 0) {
            console.error('Please add tab data');
        }
    }, [tabs]);

    return (
        <>
            <View
                style={{
                    backgroundColor: tabBarContainerBackground
                        ? tabBarContainerBackground
                        : '#fff',
                    position: 'absolute',
                    bottom: containerBottomSpace ? containerBottomSpace : 0,
                    alignSelf: 'center',
                    borderTopRightRadius,
                    borderTopLeftRadius,
                    borderBottomLeftRadius,
                    borderBottomRightRadius,
                }}
            >
                <View
                    {...{
                        height,
                        width: CustomWidth,
                        backgroundColor: tabBarContainerBackground
                            ? tabBarContainerBackground
                            : '#fff',
                        alignSelf: 'center',
                        borderTopRightRadius,
                        borderTopLeftRadius,
                        borderBottomLeftRadius,
                        borderBottomRightRadius,
                    }}
                >
                    <AnimatedSvg
                        width={CustomWidth * 2}
                        {...{ height }}
                        style={{
                            transform: [{ translateX }],
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Path fill={tabBarBackgroundColor} {...{ d }} />
                    </AnimatedSvg>
                    <View style={StyleSheet.absoluteFill}>
                        <Tabs {...props} {...{ tabs, value }} />
                    </View>
                </View>
                <SafeAreaView
                    style={{
                        alignSelf: 'center',
                        borderBottomLeftRadius,
                        borderBottomRightRadius,
                    }}
                />
            </View>
        </>
    );
};

export default TabNavigation;
