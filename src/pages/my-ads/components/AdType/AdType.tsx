import { TTextColors } from 'types';
import { Localize } from '@deriv-com/translations';
import { Text } from '@deriv-com/ui';
import './AdType.scss';

type TAdTypeProps = {
    adPauseColor: TTextColors;
    floatRate: string;
};
const AdType = ({ adPauseColor, floatRate }: TAdTypeProps) => {
    return (
        <div className='ad-type'>
            <Text as='span' className='ad-type__badge' color={adPauseColor} size='2xs'>
                <Localize i18n_default_text='Float' />
            </Text>
            <Text as='span' color={adPauseColor} size='2xs'>
                {floatRate}%
            </Text>
        </div>
    );
};

export default AdType;
