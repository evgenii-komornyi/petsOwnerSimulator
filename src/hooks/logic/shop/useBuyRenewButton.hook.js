import useOwnerStore from '../../../app/useOwnerStore';
import { useToast } from '../../common/useToast.hook';

export const useBuyRenewButton = (
    item,
    quantity,
    setIsPressed,
    resetQuantity
) => {
    const { happyPetCoins, buyItem } = useOwnerStore(state => state);
    const toastCaller = useToast();

    const buy = async () => {
        if (item.price * quantity > happyPetCoins) {
            toastCaller(`You do not have enough money!`);

            return;
        }

        if (item.hasOwnProperty('count')) {
            await buyItem({ ...item, count: quantity });
            toastCaller(
                `You bought ${quantity} ${item.name} item${
                    quantity > 1 ? 's' : ''
                }!`
            );
        } else {
            await buyItem(item);
            toastCaller(`You bought ${item.name}!`);
        }

        setIsPressed(prev => !prev);
        resetQuantity();
    };

    return { buy };
};
