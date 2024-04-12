import * as React from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
    Text,
    I18nManager,
} from 'react-native';

let { width } = Dimensions.get('window');
var prevIndex = -1;

export default class Tabs extends React.PureComponent {
    values;
    transitionDuration = this.props.transitionSpeed
        ? this.props.transitionSpeed
        : null;
    activeTabIndex = this.props.defaultActiveTabIndex
        ? this.props.defaultActiveTabIndex > this.props.tabs.length
            ? 0
            : this.props.defaultActiveTabIndex
        : 0;

    constructor(props) {
        super(props);
        const { tabs } = this.props;
        const { activeTabIndex } = this;

        this.values = tabs?.map(
            (_, index) => new Animated.Value(index === activeTabIndex ? 1 : 0)
        );
    }

    componentDidMount() {
        const { activeTabIndex } = this;
        this.onPress(activeTabIndex, true);
    }

    reset() {
        const { defaultIndexTab, tabs } = this.props;
        if (defaultIndexTab === -1) return;

        this.values = tabs?.map(
            (_, index) =>
                new Animated.Value(index === this.activeTabIndex ? 1 : 0)
        );
        prevIndex = -1;
        this.onPress(this.activeTabIndex, true);
    }

    range(start, end) {
        var len = end - start;
        var a = new Array(len);
        for (let i = 0; i < len; i++) a[i] = start + i;
        return a;
    }

    onPress = (index, noAnimation = false) => {
        if (prevIndex !== index) {
            const { value, tabs, containerWidth } = this.props;
            const { transitionDuration } = this;
            let customWidth = containerWidth ? containerWidth : width;
            const tabWidth = customWidth / tabs.length;
            let rangeNumber = this.range(0, tabs.length).reverse();

            Animated.sequence([
                Animated.parallel(
                    this.values.map(v =>
                        Animated.timing(v, {
                            toValue: 0,
                            useNativeDriver: true,
                            duration: noAnimation ? 0 : 50,
                        })
                    )
                ),
                Animated.timing(value, {
                    toValue: I18nManager.isRTL
                        ? customWidth + tabWidth * rangeNumber[index]
                        : tabWidth * index,
                    useNativeDriver: true,
                    duration: noAnimation ? 0 : transitionDuration,
                }),
                Animated.timing(this.values[index], {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 750,
                }),
            ]).start();
            prevIndex = index;
        }
    };

    render() {
        const { onPress } = this;
        const {
            tabs,
            value,
            activeTabBackground,
            labelStyle,
            onTabChange,
            containerWidth,
            defaultIndexTab,
        } = this.props;
        let customWidth = containerWidth ? containerWidth : width;
        let mergeLabelStyle = { ...styles.labelStyle, ...labelStyle };
        let newActiveIcon = [
            styles.activeIcon,
            {
                backgroundColor: activeTabBackground
                    ? activeTabBackground
                    : '#fff',
            },
        ];
        return (
            <View style={styles.container}>
                {tabs.map((tab, key) => {
                    const tabWidth = customWidth / tabs.length;
                    let rangeNumber = this.range(0, tabs.length).reverse();
                    const cursor = I18nManager.isRTL
                        ? customWidth + tabWidth * rangeNumber[key]
                        : tabWidth * key;

                    const opacity = value.interpolate({
                        inputRange: [
                            cursor - tabWidth,
                            cursor,
                            cursor + tabWidth,
                        ],
                        outputRange: [1, 0, 1],
                        extrapolate: 'clamp',
                    });

                    if (defaultIndexTab === 1) {
                        this.reset();
                    }

                    const opacity1 = this.values[key].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolate: 'clamp',
                    });

                    return (
                        <React.Fragment {...{ key }}>
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    onPress(key);
                                    onTabChange && onTabChange(tab);
                                }}
                            >
                                <Animated.View
                                    style={[
                                        styles.tab,
                                        { opacity: opacity, zIndex: 100 },
                                    ]}
                                >
                                    {tab.inactiveIcon}
                                    <Text style={mergeLabelStyle}>
                                        {tab.name}{' '}
                                    </Text>
                                </Animated.View>
                            </TouchableWithoutFeedback>
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    top: -8,
                                    left: tabWidth * key,
                                    width: tabWidth,
                                    height: 64,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: opacity1,
                                    zIndex: 50,
                                }}
                            >
                                <View style={newActiveIcon}>
                                    {tab.activeIcon}
                                </View>
                            </Animated.View>
                        </React.Fragment>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
    },
    activeIcon: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 11,
        fontWeight: '600',
        color: '#000',
    },
});
