import React from 'react'
import Accordion from "../components/Accordion";




function Accordians() {
    return (
        <div className="container py-5">
        <div className="row">
            <div className="col-md-6">
                <Accordion
                    title="What is the Full meaning of GDL
                    ?"
                    content="Growth and Development Asset Management Limited.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Who is GDL
                    ?"
                    content="Growth and Development Asset Management Limited (GDL) is a non-bank financial institution licensed
                    by the Securities and Exchange Commission (SEC) and Nigerian Stock Exchange (NSE) to serve as
                    Broker/Dealer (Stockbroking Services) , Portfolio and Fund Managers."
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How can I be sure my funds are safe with GDL
                    ?"
                    content="
                    <p>GDL is regulated by SEC and fully registered under the regulation of the financial institution. We have
                    professionals managing funds under our management in strict compliance with laid down policies and
                    procedures. </p>
                    <p>We are a conservative institution; we don’t take excessive risk; we carry out proper research before we
                    invest in investment instruments. </p>
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Can I have some additional cover or assurance on the safety of my funds
                    ?"
                    content="
                    <p>We can assure you that your funds are safe, we have grown significantly over the last 5 years and the total
                    funds under our management is over 5 Billion, we also have good corporate governance and risk
                    management framework, with a stable, experienced Board and Management.</p>
                    <p>You can also invest in our Money Market which is as safe as funds in the Bank. All the assets of the Fund
                    are held by the Custodian, UBA Plc (Global Custodian Services). UBA is a large systemically significant
                    Tier 1 Bank. The custody arrangement completely precludes the Fund Manager and all other parties
                    from access to the assets of the Fund. the fund also has an BBB investment rating from Augusto & Co.
                    and a Trustees that ensures we do not break the rule that governs the Fund.</p>
                    <p>For huge funds, our correspondent banks can issue you a comfort letter pledging to hold your funds till
                    maturity but interest rates for pledged funds will differ from the usual GDL rates.</p>"
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Are NBFI ( Non-Bank Financial Institution) allowed to receive and place funds for investors?"
                    content="
                    <p>We are a licensed and regulated Asset /Fund management Company so by law we can receive
                    funds on behalf of our client and invest same on behalf of our client in very safe and profitable
                    investment vehicles. </p>
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Why should I come to GDL rather than take my funds to the Bank?"
                    content="
                    <p>With GDL you enjoy a one-on-one personalized treatment, our customers receive immediate
                    resolution and attention to their enquiries, queries and concerns. Top of the notch service delivery.
                    Our interest rates are also higher than commercial banks rates.</p>
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How come your rates are higher than the regular banks
                    ?"
                    content="
                    <p>Our rates are higher than the Banks, because in GDL we have less operating cost and are not
                    mandated to have a CRR position of 30% like the regular banks.</p>
                   "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How do I calculate interest earned at maturity of my investment 
                    ?"
                    content="
                    <p>Principal * rate * tenure divided by 365days.</p>
                   "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="What instruments do you invest your funds into
                    ?"
                    content="
                    <p>Our funds are invested in safe money market instruments through our correspondent Banks. We also
                    invest in safe and well-structured commercial papers. We finance selected businesses who meet
                    our stringent risk acceptance criteria. </p>
                   "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Are you a regulated company
                    ?"
                    content="
                    <p>We are regulated by SEC, NSE and CBN.</p>
                   "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How much should I have before I can invest with GDL High yield Note
                    ?"
                    content="
                    <p>With a minimum of &#x20A6 100,000 you can invest with us.</p>
                   "
                />
            </div>
        </div>
        {/* FAQ for MMF */}
        <h4 className="text-center my-5">Frequently Asked Questions on GDL MMF</h4>
        <div className="row mt-3">
            <div className="col-md-6">
                <Accordion
                    title="What is the GDL Money Market Fund?"
                    content="The GDL Money Market Fund (“the Fund) is an open-ended mutual fund that seeks to provide safety, liquidity, 
                    diversification and competitive return. The Fund will invest in high-quality short-term money market securities, 
                    short term debt securities such as Bankers’ Acceptances, Certificates of Deposits, Commercial Papers, Deposits 
                    (Fixed/Tenored) with eligible financial institutions, and other instrument introduced and approved by the Central 
                    Bank of Nigeria (CBN) from time to time as permissible under SEC Rule 470. GDL Money Market Fund provides an 
                    opportunity for a large number of investors to pool resources together to invest in safe assets and earn high 
                    income on a quarterly basis. The Fund allows institutional investors to invest alongside individual investors in a 
                    diversified portfolio of high yielding and safe money market securities.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title=" What are the benefits of investing in the Fund?"
                    content="The fund will give investors access to liquidity, diversification, regular income, and professional portfolio 
                    management. The Fund will utilize the market bargaining power obtained from pooling of funds to enable 
                    investors enjoy competitive returns at minimal risk.
                    "
                />
            </div>



            <div className="col-md-6">
                <Accordion
                    title="Who will manage the GDL Money Market Fund?"
                    content="The GDL Money Market Fund will be professionally managed by Growth and Development Asset Management 
                    Limited, currently registered by the Securities & Exchange Commission as a Fund/Portfolio Management firm. GDL 
                    Asset Management has an investment grade rating by Agusto & Co.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How much can I invest in the Fund?"
                    content="There is no limit to how much you can invest in the Fund, however, the minimum initial investment for the offer 
                    is N10,000 (1,000 units), with multiples of N1,000 (100) units thereafter.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="What is the Minimum Holding Period for the Fund?
                    "
                    content="The Fund only requires investors to hold units of the Fund for at least 30 Calendar days (1 month).
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="What will I receive as evidence of my investment in the Fund?"
                    content="Every Unit-Holder will receive a GDL Money Market Fund Collection Receipt Statement upon payment or 
                    investment in the Fund.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How do I monitor my investment in the Fund?"
                    content="You will receive a statement of account on a quarterly basis not more than 15 working days after the end of each 
                    quarter. Additionally, Unit Holders can visit the Fund Manager’s website (www.gdl.com.ng) to monitor end-of-day 
                    market prices of the Fund.
                    
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="What is the Fund’s Asset Allocation?"
                    content="The fund would invest between 10%-40% of its total assets in fixed deposits, 50%-70% in short term government 
                    securities such as Treasury Bills and 5%-15% in other money market instruments like commercial papers.
                    
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Is there a guaranteed Rate of Return on an investment in the Fund?"
                    content="Investment return in the Fund is not guaranteed. Indicative Fund return will be made available to investors. We 
                    expect that indicative return will not differ materially from the actual return of the Fund.
                    <br> <br> 
                    It is important to note that the return on the Fund is a function of prevailing interest rates in the Nigerian Financial 
                    Market. The Fund Manager has no influence over changes in interest rate. Accordingly it is impossible to guarantee 
                    any particular rate of return on the investment. However, the Fund Manager will strive to generate competitive 
                    returns to unit-holders.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How can I profit from my investment?
                    "
                    content="The Fund Manager will declare dividends and make distributions from the net income of the Fund on a quarterly 
                    basis to unit-holders. Unit-holders can elect to receive their dividend in cash or reinvest their dividends in new 
                    units at the Offer Price.
                    
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="What is the procedure for selling or redeeming my investment?"
                    content="Unit-holders can sell their units in the Fund after the initial 30-day holding period. Unit-holders will be required to 
                    redeem units online or complete a Redemption Form and return the proof of investment to the Fund Manager. 
                    Once these documents have been verified, the redemption request will be processed within five (5) business days. 
                    Minimum permissible holding after partial redemption is N1,000 or such balance as advised by the Manager from 
                    time to time. However, units redeemed before the expiration of Minimum Investment Holding Period (30days) 
                    will attract a handling fee charge of 10% of the income accrued on such investment.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Who can invest in the GDL Money Market Fund?"
                    content="Anyone can invest in the fund. The fund would be attractive to all investors who desire a steady stream of income 
                    and have low risk appetite. The fund is structured to pay dividends quarterly. High networth individuals with 
                    available short term cash balances can also take advantage of the fund to earn higher rates of return. Institutional 
                    clients who desire liquidity and easy accessibility to their funds with competitive returns can also take advantage.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How can I start an investment?
                    "
                    content="Once the Prospectus has been cleared by the Securities and Exchange Commission, an investment in the Fund can 
                    be made by completing a subscription form and making payment into the account details below. Completed 
                    subscription forms, with KYC documentation (means of identification, utility bills and passport photograph) and 
                    evidence of payment are required to be sent to Growth and Development Asset Management Limited or by mail 
                    to moneymarketfund@gdl.com.ng 
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How can I invest as a Foreign Investor?"
                    content="The Fund assets are denominated in Naira and, as such, capital inflows by foreign investors who subscribe to the 
                    Fund shall be converted to Naira at the exchange rate as advised by the Fund Manager’s Bankers. Foreign currency 
                    subscribers are advised to contact the Receiving Bank for the applicable exchange rate on the day the payment 
                    for the subscription is being effected. The applicable Receiving Banks will issue Certificate of Capital Importation 
                    (‘CCI’) evidencing such foreign currency subscriptions. CCIs are required to enable subsequent repatriation, in a 
                    freely convertible currency, of the dividends from or proceeds of any future sale of the Units acquired in the 
                    proposed Offer for Subscription.
                    "
                />
            </div>

        </div>
        <h4 className="text-center my-5">Frequently Asked Questions on GDL SIA</h4>
        <div className="row mt-3">
            <div className="col-md-6">
                <Accordion
                    title="What is the smart investment account (SIA)?"
                    content="SIA is an investment account that allows individuals to invest their savings with GDL. 
                    SIA investors earn 7% interest rate per annum amongst many other benefits like easy 
                    access to credit and interest free education financing. To access the loan and interest 
                    free education financing investors are expected to maintain their accounts (without 
                    withdrawals for a minimum of six months and one year, respectively.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="What is the minimum initial investment balance?"
                    content="Investors are required to open the account with a minimum of N25,000. However, 
                    there is no stipulated maximum account opening balance. The initial investment will 
                    be locked-in for the first six months and investors are discouraged from withdrawing 
                    from it during the period. However, the fund will still be made available to the investor 
                    on demand but this withdrawal attracts a penalty of 1.5% of outstanding balance 
                    prior to withdrawal.
                    
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Can I withdraw from my additional monthly contributions before the six months 
                    lapses?"
                    content="Yes, you can. However, such withdrawals inhibits your chances of qualifying and 
                    benefiting from access to loan and the free interest education financing.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="What is the minimum monthly contribution in SIA?"
                    content="Investors are required to make a minimum monthly contribution of N5, 000 into their 
                    personal SIA accounts. Consistent monthly payments without any withdrawals in the 
                    first six months qualifies the investor to wonderful benefits such as easy access to 
                    capital and interest free education financing. SIA investors are free to withdraw from 
                    their monthly contributions whenever they need cash.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Can I increase my monthly contribution at will?"
                    content="SIA investors can increase their monthly contribution into their accounts whenever 
                    they want. However, GDL requests for a prior notice by way of writing.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Who is eligible to borrow from the Fund?
                    "
                    content="All SIA investors who do not withdraw their initial investments for six months and 
                    consistently fund their account monthly with the agreed contributory amount are 
                    eligible for loan subject to meeting all necessary conditions.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How can I request for a loan?"
                    content="SIA investors can go to the website and fill in the loan request form. Collaterals are not 
                    requested to secure the loan. All the SIA investor needs to provide are two guarantors 
                    who are already on the scheme with sufficient balances to support the loan amount 
                    required by the customer.
                    "
                />
            </div>

            <div className="col-md-6">
                <Accordion
                    title="How much can I borrow and what is the lending interest rate?"
                    content="Intending borrowers who are SIA investors can collect loans up to double their total 
                    investment in the scheme. GDL offers loans at 20% interest rate per annum to SIA 
                    investors regardless of the size of the loan. 
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="What is the loan duration?"
                    content="SIA loans are intended to be short term loans, as such they do not stretch beyond one 
                    year.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How do I repay the loan?"
                    content="Borrowers can simply repay the loan by depositing money into a designated account. 
                    The loan repayment will be spread over a few months (not longer than 12 months)
                    and the borrower is expected to repay a portion of the interest and principal monthly.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="How do I access the education fund?
                    "
                    content="The education fund is designed to bridge education finance for school fees 
                    repayment. There is no lending interest rate charged on this loan. To be eligible for the 
                    loan, SIA investors must maintain funding their account for a year without any 
                    withdrawal. The loan is extended for a maximum of one year and the borrower must 
                    provide two guarantors who are currently on the SIA scheme to secure the loan.
                    "
                />
            </div>
            <div className="col-md-6">
                <Accordion
                    title="Are there any other benefits to joining the SIA scheme?"
                    content="Yes, we plan to reward SIA investors who are actively funding their accounts at the 
                    end of the year with wonderful gift items. The more you save, the higher your reward.
                    "
                />
            </div>

        </div>
    </div>
    )
}

export default Accordians
