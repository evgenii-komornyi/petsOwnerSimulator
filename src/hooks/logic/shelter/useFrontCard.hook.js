import { useNavigate } from 'react-router-native';
import useOwnerStore from '../../../app/useOwnerStore';
import { useState, useEffect } from 'react';

export const useFrontCard = (type, pet) => {
    const navigate = useNavigate();
    const { adoptPet, pets } = useOwnerStore(state => state);

    const [ownerPet, setOwnerPet] = useState(null);

    useEffect(() => {
        setOwnerPet(pets.find(op => op.id === pet.id));
    }, []);

    const adopt = () => {
        adoptPet(type, pet);
        navigate('/');
    };

    const isPetAdopted = ownerPet && ownerPet.id === pet.id;

    return { adopt, isPetAdopted };
};
