import { Fragment } from 'react';

import { NonInteractToyButton } from '../../../components/pressable-button/non-interact-toy-button.component';
import { InteractToyButton } from '../../../components/pressable-button/interact-toy-button.component';

export const useRenderToys = toys => {
    const renderToysComponent = petId => {
        return toys.map((toy, index) => {
            if (toy.toyType === 'nonInteract' && toy.count > 0) {
                return (
                    <Fragment key={toy.id}>
                        <NonInteractToyButton item={toy} index={index} />
                    </Fragment>
                );
            }

            if (toy.toyType === 'interact') {
                return (
                    <Fragment key={toy.id}>
                        <InteractToyButton
                            item={toy}
                            index={index}
                            petId={petId}
                        />
                    </Fragment>
                );
            }

            return null;
        });
    };

    return { renderToysComponent };
};
