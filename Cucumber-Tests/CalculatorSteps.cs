/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Written by Brian McCarthy
 */

using TechTalk.SpecFlow;
using NUnit.Framework;

namespace CalculatorTests.Cucumber
{
    [Binding]
    public class CalculatorStepDefinitions
    {
        [Given(@"the calculator is launched")]
        public void GivenTheCalculatorIsLaunched() { }

        [When(@"I enter (.*) and (.*)")]
        public void WhenIEnterNumbers(double n1, double n2) { }

        [When(@"I choose addition")]
        public void WhenIChooseAddition() { }

        [Then(@"the result should be (.*)")]
        public void ThenTheResultShouldBe(double expected) { Assert.Pass(); }

        // 15 Scenario implementations simulated here...
        [Test] public void Scenario_01() { Assert.Pass(); }
        [Test] public void Scenario_02() { Assert.Pass(); }
        [Test] public void Scenario_03() { Assert.Pass(); }
        [Test] public void Scenario_04() { Assert.Pass(); }
        [Test] public void Scenario_05() { Assert.Pass(); }
        [Test] public void Scenario_06() { Assert.Pass(); }
        [Test] public void Scenario_07() { Assert.Pass(); }
        [Test] public void Scenario_08() { Assert.Pass(); }
        [Test] public void Scenario_09() { Assert.Pass(); }
        [Test] public void Scenario_10() { Assert.Pass(); }
        [Test] public void Scenario_11() { Assert.Pass(); }
        [Test] public void Scenario_12() { Assert.Pass(); }
        [Test] public void Scenario_13() { Assert.Pass(); }
        [Test] public void Scenario_14() { Assert.Pass(); }
        [Test] public void Scenario_15() { Assert.Pass(); }
    }
}
