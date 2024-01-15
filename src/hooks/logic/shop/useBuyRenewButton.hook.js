import useOwnerStore from '../../../app/useOwnerStore';
import { useToast } from '../../common/useToast.hook';

export const useBuyRenewButton = (item, quantity, resetQuantity) => {
    const { happyPetCoins, buyItem } = useOwnerStore(state => state);
    const toastCaller = useToast();
    const notEnoughMoney =
        item.price * quantity > happyPetCoins || item.price > happyPetCoins;

    const buy = async () => {
        if (notEnoughMoney) {
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

        resetQuantity();
    };

    return { buy, notEnoughMoney };
};
