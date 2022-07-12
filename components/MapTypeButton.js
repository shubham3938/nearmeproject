
import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

const MapTypeButton = (props) => {
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    const [maptypes, setMapTypes] = React.useState({ maptypes: "satelite" });

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    icon={open ? 'minus' : 'plus'}
                    actions={[

                        {
                            icon: 'road',
                            label: 'Satelite map',
                            onPress: () => {
                                // console.log('Pressed email'),
                                setMapTypes({ maptypes: "satelite" });
                                // console.log({maptypes})
                            },
                        },
                        {
                            icon: 'earth',
                            label: 'Standard map',
                            onPress: () => {
                                    setMapTypes({ maptypes: "standard" });
                                    // console.log({maptypes})
                            }
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        </Provider>
    );
};

export default MapTypeButton;