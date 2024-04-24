import CountrySelect from '../../modules/country-autocomplete/component';
import LoadingButton from '@mui/lab/LoadingButton';

interface WelcomeProps {
  handleCountryAutocomplete: (countryLabel: string) => void;
  handleFetchAirports: () => Promise<void>;
  isLoadingAirports: boolean;
}

function Home({
  handleCountryAutocomplete,
  handleFetchAirports,
  isLoadingAirports,
}: WelcomeProps) {
  return (
    <section className="w-full text-center h-full flex flex-col justify-center items-center py-12 px-8">
      <div className="flex flex-col gap-8 md:gap-14 w-full h-full justify-center items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-slate-100 font-sans text-center text-3xl font-medium sm:text-6xl">
            Compare Airports <span className="text-slate-300">Distance</span>
          </h1>

          <p className="text-slate-100 font-light opacity-60 md:text-2xl">
            Calculate the distance{' '}
            <span className="text-slate-300">between airports</span>.
          </p>
        </div>

        <div>
          <CountrySelect
            handleCountryAutocomplete={handleCountryAutocomplete}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-slate-50 text-xs opacity-45 font-extralight italic">
          for now, this project is intended to work properly for US airports.{' '}
          <br /> not coverage for all the listed airports
        </p>

        <LoadingButton
          loading={isLoadingAirports}
          loadingIndicator="LOADING..."
          variant="contained"
          onClick={handleFetchAirports}
        >
          LET'S COMPARE!
        </LoadingButton>
      </div>
    </section>
  );
}

export default Home;
