import { mount } from '@vue/test-utils'
import Main from '@/components/Main'
import MegacreditIndicator from '@/components/MegacreditIndicator'

describe('Main spec', () => {
    it('should render hello text', () => {
        const wrapper = mount(Main, {
            stubs: {
                MegacreditIndicator: '<div id="stubbedMegacreditIndicator"></div>'
            }
        });

        expect(wrapper.find('.main h1').element.textContent).to.equal('This will be the main page for player board');
    });

    it('should have megacredit indicator', () => {
        const wrapper = mount(Main, {
            stubs: {
                MegacreditIndicator: '<div id="stubbedMegacreditIndicator"></div>'
            }
        });

        expect(wrapper.contains(MegacreditIndicator)).to.equal(true);
    });
});
