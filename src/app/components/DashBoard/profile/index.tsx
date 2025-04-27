import styles from './styles.module.scss';
import profile from '../../../../../public/assets/user.png'
import Image from 'next/image';
const UserProfile = {
    name: 'Nome',
    email: 'email@email.com',
    phone: '11 99999-9999',
    address: 'Rua Teste, 123',
    city: 'São Paulo',
    state: 'SP',
    zip: '12345-678',
}

export default function Profile() {
    return (
        <div className={styles.containerProfile}>
            <div className={styles.content}>
                <div className={styles.profile}>
                    <div className={styles.profileImage}>

                        <Image src={profile} alt="profile" />
                    </div>
                    <div className={styles.profileName}>

                        <p>{UserProfile.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

