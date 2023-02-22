const screen = require('./base.screen');
const SELECTORS = {

    EXPLORE_BUTTON: '~welcome-screen-explore-button'

};

class HomeScreen extends screen {


    getExploreButton() {
        return $(SELECTORS.EXPLORE_BUTTON);
    }

    async clickExploreButton() {
        await(await this.getExploreButton()).waitForDisplayed();
        await(await this.getExploreButton()).click();
    }

}

module.exports = new HomeScreen();
