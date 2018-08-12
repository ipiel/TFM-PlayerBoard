import { mount } from '@vue/test-utils'
import MegacreditIndicator from '@/components/MegacreditIndicator'

describe('MegacreditIndicator spec', () => {
    it('should render hello text', () => {
        const wrapper = mount(MegacreditIndicator);

        expect(wrapper.find('.megacredit-indicator h1').element.textContent).to.equal('This will be the megacredit indicator for player board');
    });

});
